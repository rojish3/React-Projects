import Fade from 'react-reveal/Fade';
interface IBook {
  id?: number;
  title: string;
  author: string;
  description: string;
  coverImage: string;
}
export const SingleBook: React.FC<IBook> = ({
  title,
  author,
  description,
  coverImage,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full gap-10 mt-4 p-4 lg:flex-row">
        <Fade left>
        <div className="mb-4 lg:w-[40%] flex justify-center">
          <img className="h-96 w-72 mb-10 card-shadow rounded-lg"
            src={coverImage}
            alt={title}
          />
        </div>
        </Fade>

        <Fade right>
        <div className='w-[40%]'>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-2 italic font-light text-sm">{author}</p>
          <p className="mt-4 text-lg">{description}</p>
        </div>
        </Fade>
      </div>
    </>
  );
};
