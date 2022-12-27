> **Warning**
> This is currently vaporware. If you'd like to help make it real, submit an issue introducing yourself.

---

# HTML Auth Quote

`<auth-quote>` is an easily embeddable HTML tag that includes cryptographic metadata authenticating its author.

## Why? (For Twitter Diaspora)

Twitter is a place where anyone can quip alongside other authenticated authors through short quotes.

What if HTML could directly afford us the same experience, opening up the power of social writing beyond walled gardens?

## Why? (For Book Lovers)

Do misquotes online fill you with existential cringe?

For example, here's a misquote from Augustine of Hippo who def wanted to give you travel vibes:
<img src="https://user-images.githubusercontent.com/1735/209168710-70fc8ee4-b392-4cbb-a079-3bd216c34dbd.png" />

This needs to stop!

## Why? (For AI Alarmists)

From ancient times up until now, misquotes have been made by willfully deceptive humans. But today, as if human pseudo-authors weren't bad enough, AI powered large language models have emerged as even more prolific textual sociopaths. Faster at writing, more well read, and with an objective function that cares only for the contour of language and not its truth, these AI love lying.

For example, this AI pseudo-Aristotle lied to me about Aquinas having a side gig as an organ innovator and then chose to unremorsefully quote a fake book:
<img src="https://user-images.githubusercontent.com/1735/209176053-91c79c6d-dd62-43e1-b504-39a3c6d31b55.png" />

## How `<auth-quote>` Works


To enable others to `<auth-quote>` your documents, you first cryptographically sign the content in a special way:

1) produce a merkle tree of hashes from the segments of your document
2) sign the merkle root of the above tree
3) share the tree, signature digest, and your public key alongside your document


When others `<auth-quote>` you, they will include at least these things as metadata:
* a multiproof from the merkle tree covering the quoted segments
* the merkle tree root signed by the author
* the author's public key

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

### Example of `<auth-content>`

<img width="1079" alt="image" src="https://user-images.githubusercontent.com/1735/209724997-7cdb036a-7b5b-46fb-abb8-8babd004a9b0.png">
