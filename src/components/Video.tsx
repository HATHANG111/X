"use client";

import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT!;

type VideoProps = {
  path: string;
  className?: string;
};

const Video = ({ path, className }: VideoProps) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      transformation={[
        { width: "1920", height: "1080" },
        { raw: "q-90" }, // fix lỗi TS + tối ưu chất lượng
      ]}
      controls
    />
  );
};

export default Video;