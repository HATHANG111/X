import { imagekit } from "@/lib/imagekit";

export async function GET() {
  try {
    const fileId = "675d943be375273f6003858f"; // đổi sau

    const data = await new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, (error, result) => {
        if (error) {
          console.error("ImageKit error:", error);
          reject(error);
        } else {
          resolve(result);
        }
      });
    });

    return Response.json(data);
  } catch (err) {
    console.error(err);
    return Response.json(null);
  }
}