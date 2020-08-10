# @react-pdf/renderer bug

This is a reproduction of the bug in:

```jsx
import { pdf, Document, Page, Text } from '@react-pdf/renderer';

const MyDoc = (
  <Document>
    <Page>
      <Text>Hello World!</Text>
    </Page>
  </Document>
);

const blobPromise = pdf(MyDoc).toBlob(); // toString() also throws
// this throws the following error
// TypeError: Cannot read property 'slice' of undefined
```
