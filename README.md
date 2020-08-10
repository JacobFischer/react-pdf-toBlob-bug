# @react-pdf/renderer bug

This is a reproduction of the bug in:

```jsx
import { pdf, Document, Page } from '@react-pdf/renderer';

const MyDoc = (
  <Document>
    <Page>
      // My document data
    </Page>
  </Document>
);

const blobPromise = pdf(MyDoc).toBlob(); // toString() does the same
// this throws the following error
// TypeError: Cannot read property 'slice' of undefined
```
