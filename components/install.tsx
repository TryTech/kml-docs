import { Tab, Tabs } from "nextra-theme-docs";

 
export default function Install() {
  return (
    <Tabs items={['pnpm', 'npm', 'yarn']}>
        <Tab>
            <code>pnpm add @trytech/kml</code>
        </Tab>
        <Tab>
            <code>npm install @trytech/kml</code>
        </Tab>
        <Tab>
            <code>yarn add @trytech/kml</code>
        </Tab>
    </Tabs>
  )
}