"""Rebuild the public checklist PDF. Requires reportlab (a build-time tool only)."""
import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'src/content/relocation-checklist.json').read_text())
out = root / 'public/downloads/switzerland-relocation-checklist.pdf'
navy = colors.HexColor('#0A1628')
gold = colors.HexColor('#A68B5B')
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='MTitle', fontName='Times-Roman', fontSize=30, leading=33, textColor=navy, spaceAfter=15))
styles.add(ParagraphStyle(name='MPhase', fontName='Times-Roman', fontSize=23, leading=26, textColor=navy, spaceAfter=8))
styles.add(ParagraphStyle(name='MBody', fontName='Helvetica', fontSize=10, leading=15, textColor=navy, spaceAfter=7))
styles.add(ParagraphStyle(name='MTask', fontName='Helvetica-Bold', fontSize=11, leading=15, textColor=navy, spaceAfter=4))
styles.add(ParagraphStyle(name='MSmall', fontName='Helvetica', fontSize=8, leading=11, textColor=colors.HexColor('#444444'), spaceAfter=5))
source_nums = {s['id']: i + 1 for i, s in enumerate(data['sources'])}

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(gold)
    canvas.line(42, 43, A4[0]-42, 43)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(navy)
    canvas.drawString(42, 30, 'MOVE TO SWITZERLAND  |  move-to-switzerland.com/en/relocation-checklist')
    canvas.drawRightString(A4[0]-42, 30, str(doc.page))
    canvas.restoreState()

story = []
for index, phase in enumerate(data['phases']):
    if index: story.append(PageBreak())
    if index == 0:
        story += [Paragraph('Your move to Switzerland,<br/>one step at a time.', styles['MTitle']),
          Paragraph('18 practical tasks to plan, arrive and settle. Updated 10 September 2026.', styles['MBody']),
          Paragraph('A planning aid from Move to Switzerland. Helping hundreds of people move to Switzerland since 2012.', styles['MSmall']),
          Paragraph('Requirements depend on nationality, activity, household and canton. Confirm your route and deadlines with the relevant authority and your advisers. Skip tasks that do not apply. Numbers in brackets refer to the official sources on the last page.', styles['MSmall']),Spacer(1, 15)]
    story += [Paragraph(f'0{index+1} / {escape(phase["title"])}', styles['MPhase']), Paragraph(escape(phase['intro']), styles['MBody']),Spacer(1,10)]
    for task in phase['tasks']:
        source = f' [{source_nums[task["source"]]}]' if 'source' in task else ''
        table = Table([[Paragraph('[ ]', styles['MTask']), [Paragraph(escape(task['title']), styles['MTask']), Paragraph(escape(task['detail']) + source, styles['MBody'])]]], colWidths=[26, A4[0]-110])
        table.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),12)]))
        story.append(KeepTogether([table]))
    if index == len(data['phases'])-1:
        story += [Spacer(1,12), Paragraph('Official sources', styles['MPhase'])]
        for num, source in enumerate(data['sources'],1):
            story.append(Paragraph(f'{num}. <a href="{escape(source["url"])}" color="#0A1628"><u>{escape(source["name"])}</u></a>', styles['MSmall']))
        story += [Spacer(1,14), Paragraph('Need help turning this into your plan?', styles['MTask']), Paragraph('Online consultations and in-person meetings in Zurich. Offices in Zurich, Zug and Schwyz. <a href="https://move-to-switzerland.com/en/contact"><u>Discuss your move online</u></a>.', styles['MBody']), Paragraph('WorkWorkWork AG · Fänn West 10, 6403 Küssnacht am Rigi, Switzerland', styles['MSmall'])]
SimpleDocTemplate(str(out), pagesize=A4, rightMargin=42, leftMargin=42, topMargin=42, bottomMargin=60, title='Moving to Switzerland: 18-step relocation checklist', author='Move to Switzerland / WorkWorkWork AG').build(story, onFirstPage=footer, onLaterPages=footer)
print(out)
