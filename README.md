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

## How to run the bug demo

1. Clone repo
2. `npm install`
3. `npm start`
4. got to `localhost:8080` in your browser
5. See the last two components had errors using toBlob/toString
6. open Dev Tools to inspect the errors if desired
