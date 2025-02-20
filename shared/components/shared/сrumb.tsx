// import Link from "next/link";
// import { useEffect, useState } from "react";

// interface Props {
//     text: string,
//     textGenerator?: string,
//     href: string,
//     last?: boolean,
//     className?: string;
// }


// export const Crumb: React.FC<Props> = ({ text: defaultText, textGenerator, href, last = false }) => {
//     const [text, setText] = useState(defaultText);

//     useEffect(async () => {
//         // Если «textGenerator» не существует, то ничего не делайте
//         if (!Boolean(textGenerator)) {
//             return;
//         }                   
//         // Запустить текстовый генератор и снова установить текст
//         const finalText = await textGenerator();
//         setText(finalText);
//     }, [textGenerator]);

//     if (last) {
//         return <Typography color="text.primary">{text}</Typography>;
//     }

//     return (
//         <Link href={href} className="heading__breadcrumbs-item">{text}</Link>
//     );
// }
