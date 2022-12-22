# HTML Auth Quote

The `<auth-quote>` is an easily embeddable HTML tag that includes cryptographic metadata authenticating its author.

To enable others to `<auth-quote>` your documents, you first cryptographically sign the content in a special way:

1) produce a merkle tree of hashes from the sentences of your document
2) sign the merkle root of the above tree
3) share the tree, signature digest, and your public key alongside your document


When others `<auth-quote>` you, they will include at least these things as metadata:
* a pruned merkle tree with paths to the quoted sentences
* the merkle root signature digest
* your public key

```html
<auth-quote>
  merkle-tree-pruned=""
  merkle-root-digest=""
  author-site=""
  author-pubkey=""
  author-pubkey-url=""
  source-url=""
  before-quote=""
  after-quote=""
>Hello World!</auth-quote>
```

As a fallback, `<q>` tags may also be used.
