interface IPost {
    posts: never[];
    loading: boolean;
}
interface IData {
    id: number;
    title: string;
    body: string;
    reactions? : number;
    userId?: number;
}
const Posts = ({posts, loading}: IPost) => {
    if(loading) {
        return <h2>Loading...</h2>;
    }

    return <ul className="list-item mb-4">
        {
            posts.map((post: IData) => (
                <li key={post.id} className="bg-blue-700 text-white mx-96 p-8 mb-4 rounded-xl shadow-md">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-sm">{post.body}</p>
                </li>
            ))
        }
    </ul>
}

export default Posts