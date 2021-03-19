import { PDFDownloadLink } from '@react-pdf/renderer';
import TabbedPage from './TabbedPage'
import PdfPage from './PdfPage'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const tabs = [
  {
    id: 1,
    name: 'Analysis - Tab 1',
    contents: <Tab1 />
  },
  {
    id: 2,
    name: 'Analysis - Tab 2',
    contents: <Tab2 />
  },
  {
    id: 3,
    name: 'Analysis - Tab 3',
    contents: <Tab3 />
  }
]

function App() {
  return (
    <>
      <PDFDownloadLink document={<PdfPage tabs={tabs} />} fileName="tabs.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
      <TabbedPage tabs={tabs} />
    </>
  );
}

export default App;
