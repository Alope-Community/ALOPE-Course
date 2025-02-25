export default function ArticleCardComponent({
    type = '1',
}: {
    type?: '1' | '2' | '3';
}) {
    return (
        <>
            {type == '1' ? (
                <div className="shadow">
                    <img
                        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="h-[200px] w-full rounded object-cover"
                    />
                    <div className="-mt-1 mb-5 rounded-b border border-t-0 border-[#2276f0] p-5">
                        <div className="mb-2 flex gap-2 text-sm">
                            <p className="font-semibold text-[#2276f0]">CSS</p>
                            <p>&#128900;</p>
                            <p className="text-gray-500">12 Jam yang lalu</p>
                        </div>
                        <p className="relative flex font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
            ) : type == '2' ? (
                <div className="mr-4">
                    <img
                        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="h-[170px] w-full rounded object-cover"
                    />
                    <div className="mb-5">
                        <div className="my-2 flex gap-2 text-sm">
                            <p className="font-semibold text-[#2276f0]">CSS</p>
                            <p>&#128900;</p>
                            <p className="text-gray-500">12 Jam yang lalu</p>
                        </div>
                        <p className="relative flex font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="mb-5 flex items-center gap-6">
                    <img
                        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="h-[240px] w-[400px] rounded object-cover"
                    />
                    <div className="mb-5">
                        <div className="my-2 flex gap-2 text-sm">
                            <p className="font-semibold text-[#2276f0]">CSS</p>
                            <p>&#128900;</p>
                            <p className="text-gray-500">12 Jam yang lalu</p>
                        </div>
                        <h4 className="text-2xl font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </h4>
                        <p className="mt-3 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Enim nihil dicta, perspiciatis et, facere aut,
                            delectus mollitia architecto aspernatur molestiae
                            hic commodi nobis error recusandae soluta modi
                            facilis porro expedita!
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
