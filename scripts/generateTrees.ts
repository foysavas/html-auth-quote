import { MerkleTree } from "merkletreejs";
import crypto from "crypto";

function hashIt(data: string): string {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  const result = hash.digest("base64");
  return result;
}

(async () => {
  const leaves = ["a", "b", "c"].map((x) => hashIt(x));
  const tree = new MerkleTree(leaves, hashIt);
  const root = tree.getRoot().toString("hex");
  const leaf = hashIt("a");
  const proof = tree.getProof(leaf);
  console.log(tree.verify(proof, leaf, root)); // true

  const badLeaves = ["a", "x", "c"].map((x) => hashIt(x));
  const badTree = new MerkleTree(badLeaves, hashIt);
  const badLeaf = hashIt("x");
  const badProof = badTree.getProof(badLeaf);
  console.log(badTree.verify(badProof, badLeaf, root)); // false
})();
