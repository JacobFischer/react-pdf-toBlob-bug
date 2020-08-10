# @react-pdf/renderer bug

This is a reproduction of the bug in @react-pdf/renderer.

Simply put, using `pdf(doc).toBlob()` or `pdf(doc).toBlob()`, breaks.

## Example

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

Interestingly, other parts of the library work fine with generating blobs.
Namely, `BlobProvider` works great.
