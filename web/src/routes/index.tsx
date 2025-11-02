import { createFileRoute } from '@tanstack/react-router'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { Sidebar } from '../components/sidebar'
import { WebhookDetailHeader } from '../components/webhook-detail-header'
import { SectionTittle } from '../components/section-title'
import { SectionDataTable } from '../components/section-data-table'
import { CodeBlock } from '../components/ui/code-block'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const overviewData = [
    { Key: 'Method', Value: 'POST' },
    { Key: 'Status Code', Value: '200' },
    { Key: 'Content-Type', Value: 'application/json' },
    { Key: 'Content-Length', Value: '1024' },
  ]

  return (
    <div className="h-screen bg-zinc-900">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={20} minSize={15} maxSize={40}>
          <Sidebar />
        </Panel>

        <PanelResizeHandle className="w-px bg-zinc-700 hover:bg-zinc-600 transition-colors duration-150" />

        <Panel defaultSize={80} minSize={60}>
          <div className="flex h-full flex-col">
            <WebhookDetailHeader />
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-6 p-6">
                <div className="space-y-4">
                  <SectionTittle>Request Overview</SectionTittle>
                  <SectionDataTable data={overviewData} />
                </div>

                <div className="space-y-4">
                  <SectionTittle>Query Parameters</SectionTittle>
                  <SectionDataTable data={overviewData} />
                </div>

                <div className="space-y-4">
                  <SectionTittle>Headers</SectionTittle>
                  <SectionDataTable data={overviewData} />
                </div>

                <div className="space-y-4">
                  <SectionTittle>Request Body</SectionTittle>
                  <CodeBlock code={JSON.stringify(overviewData, null, 2)} />
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  )
}
