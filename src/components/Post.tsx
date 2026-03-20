// import Image from "@/components/Image";
// import PostInfo from "@/components/PostInfo";
// import PostInteractions from "@/components/PostInteractions";
// import Video from "@/components/Video";
// import Link from "next/link";

// interface FileDetailsResponse {
//   width: number;
//   height: number;
//   filePath: string;
//   url: string;
//   fileType: string;
//   customMetadata?: { sensitive?: boolean };
// }

// const Post = async ({ type }: { type?: "status" | "comment" }) => {
//   let fileDetails: FileDetailsResponse | null = null;

//   try {
//     const res = await fetch("http://127.0.0.1:3000/api/file", {
//       cache: "no-store",
//     });

//     fileDetails = await res.json();
//   } catch (err) {
//     console.error("Fetch error:", err);
//   }

//   return (
//     <div className="p-4 border-y-[1px] border-borderGray">
//       <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
//         <span>Lama Dev reposted</span>
//       </div>

//       <div className={`flex gap-4 ${type === "status" ? "flex-col" : ""}`}>
//         {type !== "status" && (
//           <div className="relative w-10 h-10 rounded-full overflow-hidden">
//             <Image path="general/avatar.png" alt="" w={100} h={100} tr />
//           </div>
//         )}

//         <div className="flex-1 flex flex-col gap-2">
//           <div className="w-full flex justify-between">
//             <Link href={`/lamaWebDev`} className="flex gap-4">
//               {type === "status" && (
//                 <div className="relative w-10 h-10 rounded-full overflow-hidden">
//                   <Image path="general/avatar.png" alt="" w={100} h={100} tr />
//                 </div>
//               )}

//               <div className="flex items-center gap-2 flex-wrap">
//                 <h1 className="text-md font-bold">Lama Dev</h1>
//                 <span className="text-textGray">@lamaWebDev</span>
//               </div>
//             </Link>

//             <PostInfo />
//           </div>

//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

//           {/* MEDIA */}
//           {fileDetails ? (
//             fileDetails.fileType === "image" ? (
//               <Image
//                 path={fileDetails.filePath}
//                 alt=""
//                 w={fileDetails.width}
//                 h={fileDetails.height}
//                 className={
//                   fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
//                 }
//               />
//             ) : fileDetails.fileType === "video" ? (
//               <Video
//                 path={fileDetails.filePath}
//                 className={
//                   fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
//                 }
//               />
//             ) : null
//           ) : (
//             <div className="text-sm text-gray-500">
//               No media or failed to load
//             </div>
//           )}

//           <PostInteractions />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;
const Post = async () => {
  return <div>OK TEST</div>;
};

export default Post;