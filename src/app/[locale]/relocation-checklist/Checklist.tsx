'use client';

import { useEffect, useState } from 'react';
import checklist from '@/content/relocation-checklist.json';
import { trackConversion } from '@/lib/analytics';

const storageKey = 'mts-relocation-checklist-v1';
const allTasks = checklist.phases.flatMap(phase => phase.tasks);
const validIds = new Set(allTasks.map(task => task.id));

export function Checklist() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(true);
  const [hideCompleted, setHideCompleted] = useState(false);

  useEffect(() => {
    try {
      const stored: unknown = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (Array.isArray(stored)) setCompleted([...new Set(stored.filter((id): id is string => typeof id === 'string' && validIds.has(id)))]);
    } catch { setSaved(false); }
    setReady(true);
  }, []);

  function toggle(id: string) {
    const next = completed.includes(id) ? completed.filter(value => value !== id) : [...completed, id];
    if (!completed.length && next.length) trackConversion('checklist_started');
    setCompleted(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); setSaved(true); } catch { setSaved(false); }
  }

  return (
    <div>
      <div className="checklist-controls mb-12 border-y border-navy/15 py-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-navy" role="status">{completed.length} of {allTasks.length} tasks complete</p>
            <progress className="mt-3 h-2 w-full accent-gold sm:w-64" value={completed.length} max={allTasks.length} aria-label="Relocation checklist progress" />
            <p className="mt-2 text-sm text-charcoal/70">{saved ? 'Progress is saved only in this browser. No account needed.' : 'Browser storage is unavailable. Your progress will last until you leave this page.'}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/downloads/switzerland-relocation-checklist.pdf" download onClick={() => trackConversion('checklist_download')} className="inline-flex min-h-11 items-center bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">Download PDF</a>
            <button type="button" onClick={() => { trackConversion('checklist_print'); window.print(); }} className="min-h-11 border border-navy/30 px-5 py-3 text-sm font-semibold text-navy hover:bg-navy/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">Print my checklist</button>
          </div>
        </div>
        <label className="mt-5 inline-flex min-h-11 cursor-pointer items-center gap-3 text-sm text-navy">
          <input type="checkbox" checked={hideCompleted} onChange={event => setHideCompleted(event.target.checked)} className="h-5 w-5 accent-navy" />
          Hide completed tasks on screen
        </label>
      </div>
      <div className="space-y-14">
        {checklist.phases.map((phase, index) => (
          <section key={phase.id} aria-labelledby={`phase-${phase.id}`} className="checklist-phase">
            <div className="mb-5 flex items-baseline gap-4">
              <span className="text-sm font-semibold text-charcoal/60" aria-hidden="true">0{index + 1}</span>
              <div>
                <h2 id={`phase-${phase.id}`} className="font-serif text-3xl font-semibold text-navy sm:text-4xl">{phase.title}</h2>
                <p className="mt-2 text-charcoal/70">{phase.intro}</p>
              </div>
            </div>
            <ul className="divide-y divide-navy/10 border-y border-navy/10">
              {phase.tasks.map(task => {
                const checked = completed.includes(task.id);
                const source = 'source' in task ? checklist.sources.find(item => item.id === task.source) : undefined;
                return (
                  <li key={task.id} className={`checklist-task py-5 ${hideCompleted && checked ? 'checklist-hidden' : ''}`}>
                    <div className="flex gap-4">
                      <input id={task.id} type="checkbox" disabled={!ready} checked={checked} onChange={() => toggle(task.id)} aria-describedby={`${task.id}-detail`} className="mt-1 h-6 w-6 shrink-0 cursor-pointer accent-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy" />
                      <div>
                        <label htmlFor={task.id} className={`block cursor-pointer text-lg font-semibold text-navy ${checked ? 'line-through decoration-navy/40' : ''}`}>{task.title}</label>
                        <p id={`${task.id}-detail`} className="mt-2 max-w-3xl text-sm leading-7 text-charcoal/80">{task.detail}</p>
                        {source && <a href={source.url} className="mt-2 inline-block text-sm text-navy underline underline-offset-4 hover:text-gold-dark">Official guidance<span className="sr-only">: {source.name}</span></a>}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {hideCompleted && phase.tasks.every(task => completed.includes(task.id)) && <p className="checklist-controls mt-4 text-sm text-charcoal/70">All tasks in this stage are complete.</p>}
          </section>
        ))}
      </div>
    </div>
  );
}
