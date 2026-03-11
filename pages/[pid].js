import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import School from "../public/assets/projects/school.png";
import { useRouter } from "next/router";
import baseUrl from "@/helpers/baseUrl";
import ThemeToggle from "@/components/ThememToggle";

const property = (props) => {
  let count = 0;
  // const {theme} = useTheme();
  // console.log(theme);
  const router = useRouter();
  const pageId = router.query.pid;
  //   console.log(pageId);

  const { _id, pid, name, lang, description, demo, image, tech } =
    props.individualPage;
  // console.log(image);

  return (
    <div className="w-full dark:bg-gray-800" key={_id}>
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={image}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 dark:text-gray-500">{name}</h2>
          {lang.map((lan) => (
            <span className="font-bold dark:text-gray-400" key={lan}>
              {" "}
              {lan}{" "}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-gray-700 dark:text-gray-600">Project</p>
          <div className="flex items-center justify-between">
            <h2 className="text-gray-700 dark:text-gray-600">Overview</h2>
            {/* <div className="mb-4 mr-4">
              <ThemeToggle />
            </div> */}
          </div>
          <p className="text-gray-700 dark:text-gray-500">{description}</p>
          <div className="flex items-center justify-between mt-4">
            
            <a href={demo}>
              <button className="px-8 py-2  dark:shadow-gray-700">
                Demo
              </button>
            </a>
            <div className="mr-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-gray-500">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {tech.map((tec) => (
                <p
                  className="text-gray-600 dark:text-gray-500 py-2 flex items-center"
                  key={tec}
                >
                  <RiRadioButtonFill className="pr-1" /> {tec}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        <Link href="/#projects" className="pb-96">
          <p className="underline cursor-pointer dark:shadow-gray-700 dark:text-blue-800">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export async function getServerSideProps({ req, params: { pid } }) {
  try {
    const host = req ? req.headers.host : 'localhost:3000';
    const protocol = req?.headers['x-forwarded-proto'] || 'http';
    const currentBaseUrl = `${protocol}://${host}`;

    const res = await fetch(`${currentBaseUrl}/api/${pid}`);
    const data = await res.json();
    if (data.error || !data.pid) {
      return { notFound: true };
    }
    return {
      props: {
        individualPage: data,
      },
    };
  } catch (error) {
    console.error("Error fetching project data:", error);
    return { notFound: true };
  }
}

export default property;
