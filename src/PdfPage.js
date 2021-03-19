import React from 'react';
import { Page, View, Document } from '@react-pdf/renderer';

const PdfPage = ({ tabs }) => (
    <Document>
        {tabs.map((tab) =>
            <Page size="A4" key={tab.id}>
                <View>
                    {tab.contents}
                </View>
            </Page>)}
    </Document>
);
export default PdfPage