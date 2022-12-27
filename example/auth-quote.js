const CryptoJS_SHA256 = function (str) {
  CryptoJS.SHA256(segment).toString(CryptoJS.enc.Hex);
};

const SubtleCrypto = crypto.subtle;
const SHA256 = async function (str) {
  function ab2hex(buffer) {
    const hexCodes = [];
    const view = new DataView(buffer);
    for (var i = 0; i < view.byteLength; i += 4) {
      const value = view.getUint32(i);
      const stringValue = value.toString(16);
      const padding = "00000000";
      const paddedValue = (padding + stringValue).slice(-padding.length);
      hexCodes.push(paddedValue);
    }
    return hexCodes.join("");
  }

  var uint8array = new TextEncoder().encode(str);
  const digest_ab = await SubtleCrypto.digest("SHA-256", uint8array);
  return ab2hex(digest_ab);
};

async function AuthQuote_produceContentTree(el) {
  const content = el;
  const leaves = [];
  for (const child of content.children) {
    const segment = child.innerText;
    const segment_sha = await SHA256(segment);
    leaves.push(segment_sha);
  }

  const tree = new MerkleTree(leaves, CryptoJS.SHA256);
  const root = tree.getRoot().toString("hex");

  return { root, leaves, tree };
}

async function AuthQuote_produceSignedContentTree(el, pk_multiformat) {
  const { root, leaves, tree } = await AuthQuote_produceContentTree(el);
  const algo = pk_multiformat.split("/")[1];
  const pk = pk_multiformat.split("/")[2];
  let algo_opts = {};
  if (algo === "ed25519-priv") {
    algo_opts = { name: "ECDSA", hash: "SHA-512" };
    // SubtleCrypto.importKey(
    //   "jwk",
    //   {
    //     /* TODO */
    //   },
    //   {
    //     name: "ECDSA",
    //     namedCurve: "P-512",
    //   }
    // );
  }

  let root_signed;
  // TODO
  // root_signed = SubtleCrypto.sign(algo_opts, pk, root);

  return { root, leaves, tree, root_signed };
}
