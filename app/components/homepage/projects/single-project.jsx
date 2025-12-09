import Image from 'next/image';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const SingleProject = ({ project }) => {
  const { name, description, code } = project;

  return (
    <div className='w-full h-fit flex flex-col items-center justify-center relative px-3 md:px-8 py-8 bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] shadow-2xl rounded-lg border border-[#2F2F2F] hover:border-[#6d28d9] transition-all duration-300'>
      <h2 className='text-[#EFF3F4] not-italic font-semibold text-2xl leading-tight text-center capitalize mb-4'>
        {name}
      </h2>
      
      <p className="text-[#b4b4b4] text-center text-sm md:text-base mb-6 leading-relaxed max-w-2xl">
        {description}
      </p>

      <Link
        href={code}
        target='_blank'
        className="flex justify-center items-center gap-2 px-6 py-2 rounded-lg border-2 border-[#6d28d9] bg-[#6d28d9] text-white font-semibold transition-all duration-300 hover:bg-transparent hover:text-[#6d28d9] hover:scale-105">
        <FaCode size={18} />
        View Code on GitHub
      </Link>
    </div>
  );
};

export default SingleProject;