import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";

const TldProfileHeader = () => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState("");

  const text = "yellow world";

  return (
    <div className="text-white ml-[250px] mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Minter Page</h1>
      <p className="py-4">
        You can share a link to your created domain minting page here
      </p>
      <div className="flex items-center gap-6 mb-6">
        <button className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse rounded-xl">
          <a target="_blank" href="/mint-domain">
            Standard Domain Minter
          </a>
        </button>
        <button className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse rounded-xl">
          <a target="_blank" href="/mint-sbt">
            Sbt Domain Minter
          </a>
        </button>
        &nbsp;&nbsp;
        {/* <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
          <button className="p-2 bg-slate-600 rounded-2xl">Copy Link</button>
        </CopyToClipboard>
        {copied ? (
          <span className="text-green-500 text-sm">Link copied</span>
        ) : (
          ""
        )} */}
      </div>
      <img
        src="/planet-06.png"
        alt=""
        className="w-[900px] h-[400px] rounded-[40px]"
      />
    </div>
  );
};

export default TldProfileHeader;
