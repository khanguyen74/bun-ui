import { ShikiTransformer } from "shiki"

export const transformerCopyButton = (): ShikiTransformer => ({
  name: "copy-button",
  pre(node) {
    node.children.push({
      type: "element",
      tagName: "button",
      properties: {
        type: "button",
        className: "copy-button",
        title: "Copy to clipboard",
        onclick: `navigator.clipboard.writeText(this.previousSibling.textContent), this.classList.add('copied'), this.title='Copied!', setTimeout(()=>this.classList.remove('copied'), 2000), setTimeout(()=>this.title='Copy to clipboard', 2000)`,
      },
      children: [{ type: "text", value: "Copy" }],
    })
  },
})
// export const transformerCopyButton = (): ShikiTransformer => ({
//   name: "copy-button",
//   pre(node) {
//     node.children.push({
//       type: "element",
//       tagName: "button",
//       properties: {
//         type: "button",
//         className: "copy",
//         title: "Copy to clipboard",
//         onclick: `
//           navigator.clipboard.writeText(this.previousSibling.textContent),
//           this.className='copied',
//           this.title='Copied!',
//           setTimeout(()=>this.className='copy',5000)`.replace(/\s+/g, ""),
//       },
//       children: [
//         {
//           type: "element",
//           tagName: "svg",
//           properties: {
//             viewBox: "0 0 24 24",
//             fill: "none",
//             stroke: "currentColor",
//             strokeWidth: "1.5",
//             strokeLinecap: "round",
//             strokeLinejoin: "round",
//           },
//           children: [
//             {
//               type: "element",
//               tagName: "rect",
//               properties: {
//                 width: "8",
//                 height: "4",
//                 x: "8",
//                 y: "2",
//                 rx: "1",
//                 ry: "1",
//               },
//               children: [],
//             },
//             {
//               type: "element",
//               tagName: "path",
//               properties: {
//                 d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
//               },
//               children: [],
//             },
//             {
//               type: "element",
//               tagName: "path",
//               properties: {
//                 class: "check",
//                 d: "m9 14 2 2 4-4",
//               },
//               children: [],
//             },
//           ],
//         },
//       ],
//     })
//   },
// })
