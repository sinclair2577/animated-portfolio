import Link from "next/link";
import { portfolios } from "@/data/index";

// 静态导出必需的 generateStaticParams 函数
export function generateStaticParams() {
  return portfolios.map((project) => ({
    slug: project.slug,
  }));
}

// 服务器端获取项目数据
export function generateMetadata({ params }) {
  const project = portfolios.find(p => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.desc,
  };
}

// 导入客户端组件
import ProjectDetailContent from "./ProjectDetailContent";

const ProjectDetailPage = ({ params }) => {
  const project = portfolios.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-blue-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailContent project={project} />;
};

export default ProjectDetailPage;