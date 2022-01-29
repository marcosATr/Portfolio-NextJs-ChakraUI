import ReactHtmlParser from "react-html-parser";

interface PostProcessor {
  content: Object[];
}

export default function PostProcessor({ content }: PostProcessor) {
  const formated = [];
  
  return (
    <>
      {content.forEach(item=>{
        if(item.text) return ReactHtmlParser(`<p>${item.text} soooooo</p>`)
      })}
    </>
  )
}
