import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import projects from "../../data/projects.json";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../components/icons/github-icon";
export default function Projects() {
    const router = useRouter();
    const { id }: any = router.query;
    const [project, setProject] = useState<any>(null);
    useEffect(() => {
        if (id) {
            setProject(projects[parseInt(id) - 1]);
        }
    }, [id]);

    return (
        <>
            {project && (
                <div className="w-full min-h-[100vh] relative z-10 p-10 lg:px-32">
                    <h1 className="lg:text-6xl text-3xl font-bold text-neutral-100">{project.name}</h1>
                    <div className=" mt-10 grid place-items-center">
                        <Image src={project.image} width={1008} height={300} alt={project.name} objectFit="cover" style={{
                            borderRadius: "1rem",
                        }} />
                        <div className="grid grid-cols-2 gap-2 mt-6">
                            {project.snaps ? project.snaps!.map((snap: any) => (<Image objectFit="cover"
                                key={snap} src={snap} width={500} height={200} objectPosition={"top"} alt={snap} />)) : null}
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className=" text-red-300 font-semibold lg:text-2xl my-4">
                            {project.description}
                        </h3>
                        <p className="text-neutral-300 text-lg">
                            {project.long_description}
                        </p>
                        <div className="flex gap-4 my-4 items-center">
                            {project.demo ? <Link href={project.demo}>
                                <a className="text-red-500 underline hover:no-underline">
                                    Demo
                                </a>
                            </Link> : null}
                            {project.github ? <Link href={project.github}>
                                <a>
                                    <GithubIcon className="h-6 w-6 text-red-500" />

                                </a>
                            </Link> : null}
                        </div>
                        <div className="flex gap-4 flex-auto my-6">
                            {project.tags.map((tag: string) => (
                                <div key={tag} className="bg-neutral-700 text-red-500 p-2 rounded-full">{tag}</div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

