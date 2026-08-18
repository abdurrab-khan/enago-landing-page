import React from "react";

function Heading({ text }: { text: string }) {
  return (
    <h4 className="mb-3 font-semibold underline decoration-[#D52B1E] underline-offset-6">
      {text}
    </h4>
  );
}

export default Heading;
