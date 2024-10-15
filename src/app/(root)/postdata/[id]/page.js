export default async function singleQutes({ params }) {
    let singleQutesAi = await fetch(`https://dummyjson.com/posts/${params.id}`);
    singleQutesAi = await singleQutesAi.json();
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                        Detaile Posts
                    </h1>
                    <div className="container mx-auto flex flex-wrap -m-4">
                        <div className="p-4  w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                                    {singleQutesAi.title}
                                </h1>
                                <p className="leading-relaxed mb-6">
                                   {singleQutesAi.body}
                                </p>
                                <a className="inline-flex items-center">
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="text-gray-500 text-sm">{singleQutesAi.tags.join("-")}</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}