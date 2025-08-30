import prisma from "@/lib/prisma";

// 查询所有歌曲信息
export async function GET(req) {
  console.log("尝试连接到数据库");
  try {
    // 先尝试一个简单的数据库操作，比如count()而不是findMany()
    const count = await prisma.music.count();
    console.log(`数据库连接成功，找到 ${count} 条音乐记录`);
    
    // 如果count成功，再尝试完整查询
    const musics = await prisma.music.findMany();
    return Response.json(musics);
  } catch (error) {
    console.error("数据库错误详情:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
      meta: error.meta
    });
    
    // 返回更详细的错误信息给前端
    return Response.json(
      { 
        error: "Failed to fetch music",
        details: error.message,
        code: error.code || "UNKNOWN"
      }, 
      { status: 500 }
    );
  }
}

// 创建音乐
export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);

    // 这里可以添加的逻辑
    // const newMusic = await prisma.music.create({
    //   data: body,
    // });

    return Response.json(
      { message: "Music created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating music:", error);
    return Response.json({ error: "Failed to create music" }, { status: 500 });
  }
}
