/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
    DotsThree,
    Play,
    UsersThree,
    House,
    MagnifyingGlass,
    Books,
    ArrowRight,
    Plus,
    CaretDown,
    CaretLeft,
    CaretRight,
    Heart
} from "@phosphor-icons/react";

export default function App() {
    return (
        <div className="bg-gradient-to-b from-gray-400/70 from-10% via-zinc-900 via-30% to-zinc-900 to-100% text-zinc-50 h-screen flex flex-col">
            <div className="flex flex-1 overflow-hidden">
                <aside className="w-96 bg-zinc-950 p-6">
                    <a href="">
                        {" "}
                        <DotsThree size={28} />
                    </a>
                    <nav className="bg-zinc-900 rounded-lg mb-2 space-y-4 p-4">
                        <a
                            href=""
                            className="flex items-center gap-2 font-semibold text-zinc-400 hover:text-zinc-50"
                        >
                            <House size={28} />
                            Início
                        </a>
                        <a
                            href=""
                            className="flex items-center gap-2 font-semibold text-zinc-400 hover:text-zinc-50"
                        >
                            <MagnifyingGlass size={28} />
                            Buscar
                        </a>
                    </nav>
                    <nav className="bg-zinc-900 rounded-lg">
                        <div className="shadow-xl">
                            <div className="flex space-y-4  pb-2 pl-4 pr-4 justify-between">
                                <div className="flex items-center">
                                    <a
                                        href=""
                                        className="flex gap-2 font-semibold items-center text-zinc-400 hover:text-zinc-50"
                                    >
                                        <Books size={28} />
                                        Sua Biblioteca
                                    </a>
                                </div>
                                <div>
                                    <div className="flex item-center  pb-4">
                                        <a
                                            href=""
                                            className=" text-zinc-400 hover:text-zinc-50  hover:bg-white/5 bg-zinc-900 rounded-full p-2 "
                                        >
                                            <Plus size={24} />
                                        </a>
                                        <a
                                            href=""
                                            className=" text-zinc-400 hover:text-zinc-50  hover:bg-white/5 bg-zinc-900 rounded-full p-2 "
                                        >
                                            <ArrowRight size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center pt-2 pr-4 pl-4 pb-2 gap-2">
                                <a
                                    href=""
                                    className="text-sm font-semibold rounded-3xl bg-zinc-800 pl-2 pr-2 pt-1 pb-1 hover:bg-white/10"
                                >
                                    {" "}
                                    Playlist
                                </a>
                                <a
                                    href=""
                                    className="text-sm font-semibold rounded-3xl bg-zinc-800 pl-2 pr-2 pt-1 pb-1 hover:bg-white/10"
                                >
                                    {" "}
                                    Podcasts e programas
                                </a>
                                <a
                                    href=""
                                    className="text-sm font-semibold rounded-3xl bg-zinc-800 pl-2 pr-2 pt-1 pb-1 hover:bg-white/10"
                                >
                                    {" "}
                                    Álbuns
                                </a>
                            </div>
                        </div>
                        <div className="overflow-y-auto h-fit">
                            <div className="flex items-center justify-between pl-4 pb-4 pr-4">
                                <a
                                    href=""
                                    className="text-zinc-400 hover:text-zinc-50 hover:bg-white/5 bg-zinc-900 rounded-full p-2"
                                >
                                    <MagnifyingGlass />
                                </a>
                                <a
                                    href=""
                                    className="flex gap-2 text-zinc-400 hover:text-zinc-50"
                                >
                                    Recentes{" "}
                                    <CaretDown weight="fill" className="mt-2" />
                                </a>
                            </div>
                            <div className="p-4 space-y-2">
                                <a
                                    href=""
                                    className="flex item-center rounded-lg hover:bg-white/5"
                                >
                                    <img
                                        src="/cover1.jpg"
                                        alt="Album Cuphead"
                                        width={50}
                                        height={50}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="pl-2 font-semibold line-clamp-1 text-green-500">
                                            Cuphead - Original Soundtrack
                                        </p>
                                        <p className="pl-2 text-sm text-zinc-400 line-clamp-1">
                                            Álbum • Chistopher Larkin
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href=""
                                    className="flex item-center rounded-lg hover:bg-white/5"
                                >
                                    <img
                                        src="/cover1.jpg"
                                        alt="Album Cuphead"
                                        width={50}
                                        height={50}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="pl-2 font-semibold line-clamp-1">
                                            Cuphead - Original Soundtrack
                                        </p>
                                        <p className="pl-2 text-sm text-zinc-400 line-clamp-1">
                                            Álbum • Chistopher Larkin
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href=""
                                    className="flex item-center rounded-lg hover:bg-white/5"
                                >
                                    <img
                                        src="/cover1.jpg"
                                        alt="Album Cuphead"
                                        width={50}
                                        height={50}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="pl-2 font-semibold line-clamp-1">
                                            Cuphead - Original Soundtrack
                                        </p>
                                        <p className="pl-2 text-sm text-zinc-400 line-clamp-1">
                                            Álbum • Chistopher Larkin
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href=""
                                    className="flex item-center rounded-lg hover:bg-white/5"
                                >
                                    <img
                                        src="/cover1.jpg"
                                        alt="Album Cuphead"
                                        width={50}
                                        height={50}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="pl-2 font-semibold line-clamp-1">
                                            Cuphead - Original Soundtrack
                                        </p>
                                        <p className="pl-2 text-sm text-zinc-400 line-clamp-1">
                                            Álbum • Chistopher Larkin
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href=""
                                    className="flex item-center rounded-lg hover:bg-white/5"
                                >
                                    <img
                                        src="/cover1.jpg"
                                        alt="Album Cuphead"
                                        width={50}
                                        height={50}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="pl-2 font-semibold line-clamp-1">
                                            Cuphead - Original Soundtrack
                                        </p>
                                        <p className="pl-2 text-sm text-zinc-400 line-clamp-1">
                                            Álbum • Chistopher Larkin
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href=""
                                    className="flex item-center rounded-lg hover:bg-white/5"
                                >
                                    <img
                                        src="/cover1.jpg"
                                        alt="Album Cuphead"
                                        width={50}
                                        height={50}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="pl-2 font-semibold line-clamp-1">
                                            Cuphead - Original Soundtrack
                                        </p>
                                        <p className="pl-2 text-sm text-zinc-400 line-clamp-1">
                                            Álbum • Chistopher Larkin
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href=""
                                    className="flex item-center rounded-lg hover:bg-white/5"
                                >
                                    <img
                                        src="/cover1.jpg"
                                        alt="Album Cuphead"
                                        width={50}
                                        height={50}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="pl-2 font-semibold line-clamp-1">
                                            Cuphead - Original Soundtrack
                                        </p>
                                        <p className="pl-2 text-sm text-zinc-400 line-clamp-1">
                                            Álbum • Chistopher Larkin
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </nav>
                </aside>
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-3">
                            <button className="rounded-full bg-black/40 p-3">
                                <CaretLeft weight="bold" />
                            </button>
                            <button className="rounded-full bg-black/40 p-3 opacity-80">
                                <CaretRight weight="bold" />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <a
                                href=""
                                className=" rounded-full bg-black/40 p-3"
                            >
                                <UsersThree />
                            </a>
                            <a href="" className="rounded-full bg-black/40 p-1">
                                <img
                                    src="fotinha.png"
                                    alt="foto"
                                    width={30}
                                    height={25}
                                    className="rounded-full"
                                />
                            </a>
                        </div>
                    </div>
                    <h1 className="font-semibold text-3xl mt-10 mb-4">
                        Spot Trap
                    </h1>
                    <div className="grid grid-cols-3  gap-4">
                        <a
                            href=""
                            className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors"
                        >
                            <img
                                src="cover1.jpg"
                                alt="cuphead"
                                width={104}
                                height={104}
                            />
                            <strong className="pl-3 line-clamp-1">
                                {" "}
                                Cuphead Original Soundtrack
                            </strong>
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                                <Play weight="fill" />
                            </button>
                        </a>
                        <a
                            href=""
                            className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors"
                        >
                            <img
                                src="cover1.jpg"
                                alt="cuphead"
                                width={104}
                                height={104}
                            />
                            <strong className="pl-3 line-clamp-1">
                                {" "}
                                Cuphead Original Soundtrack
                            </strong>
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                                <Play weight="fill" />
                            </button>
                        </a>
                        <a
                            href=""
                            className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors"
                        >
                            <img
                                src="cover1.jpg"
                                alt="cuphead"
                                width={104}
                                height={104}
                            />
                            <strong className="pl-3 line-clamp-1">
                                {" "}
                                Cuphead Original Soundtrack
                            </strong>
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                                <Play weight="fill" />
                            </button>
                        </a>
                        <a
                            href=""
                            className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors"
                        >
                            <img
                                src="cover1.jpg"
                                alt="cuphead"
                                width={104}
                                height={104}
                            />
                            <strong className="pl-3 line-clamp-1">
                                {" "}
                                Cuphead Original Soundtrack
                            </strong>
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                                <Play weight="fill" />
                            </button>
                        </a>
                        <a
                            href=""
                            className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors"
                        >
                            <img
                                src="cover1.jpg"
                                alt="cuphead"
                                width={104}
                                height={104}
                            />
                            <strong className="pl-3 line-clamp-1">
                                {" "}
                                Cuphead Original Soundtrack
                            </strong>
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                                <Play weight="fill" />
                            </button>
                        </a>
                        <a
                            href=""
                            className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors"
                        >
                            <img
                                src="cover1.jpg"
                                alt="cuphead"
                                width={104}
                                height={104}
                            />
                            <strong className="pl-3 line-clamp-1">
                                {" "}
                                Cuphead Original Soundtrack
                            </strong>
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                                <Play weight="fill" />
                            </button>
                        </a>
                    </div>

                    <h1 className="font-semibold text-2xl mt-10">As musica que tu ixcuto</h1>
                    <div className="grid grid-cols-8 mt-4 gap-4">
                        <a
                            href="#"
                            className="bg-white/5 p-3 flex flex-col gap-2 relative rounded-md group hover:bg-white/10"
                        >
                            <img
                                src="cover1.jpg"
                                className="w-full"
                                width={104}
                                height={104}
                            />
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-5 flex item-center shadow-sm invisible bottom-20 right-0 absolute group-hover:visible">
                                <Play weight="fill" />
                            </button>

                            <strong className="font-semibold">Daily Mix</strong>
                            <strong className="text-sm text-zinc-400">
                                Wallows, COIN, girl in red and more
                            </strong>
                        </a>
                        <a
                            href="#"
                            className="bg-white/5 p-3 flex flex-col gap-2 relative rounded-md group hover:bg-white/10"
                        >
                            <img
                                src="cover1.jpg"
                                className="w-full"
                                width={104}
                                height={104}
                            />
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-5 flex item-center shadow-sm invisible bottom-20 right-0 absolute group-hover:visible">
                                <Play weight="fill" />
                            </button>

                            <strong className="font-semibold">Daily Mix</strong>
                            <strong className="text-sm text-zinc-400">
                                Wallows, COIN, girl in red and more
                            </strong>
                        </a>
                        <a
                            href="#"
                            className="bg-white/5 p-3 flex flex-col gap-2 relative rounded-md group hover:bg-white/10"
                        >
                            <img
                                src="cover1.jpg"
                                className="w-full"
                                width={104}
                                height={104}
                            />
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-5 flex item-center shadow-sm invisible bottom-20 right-0 absolute group-hover:visible">
                                <Play weight="fill" />
                            </button>

                            <strong className="font-semibold">Daily Mix</strong>
                            <strong className="text-sm text-zinc-400">
                                Wallows, COIN, girl in red and more
                            </strong>
                        </a>
                        <a
                            href="#"
                            className="bg-white/5 p-3 flex flex-col gap-2 relative rounded-md group hover:bg-white/10"
                        >
                            <img
                                src="cover1.jpg"
                                className="w-full"
                                width={104}
                                height={104}
                            />
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-5 flex item-center shadow-sm invisible bottom-20 right-0 absolute group-hover:visible">
                                <Play weight="fill" />
                            </button>

                            <strong className="font-semibold">Daily Mix</strong>
                            <strong className="text-sm text-zinc-400">
                                Wallows, COIN, girl in red and more
                            </strong>
                        </a>
                        <a
                            href="#"
                            className="bg-white/5 p-3 flex flex-col gap-2 relative rounded-md group hover:bg-white/10"
                        >
                            <img
                                src="cover1.jpg"
                                className="w-full"
                                width={104}
                                height={104}
                            />
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-5 flex item-center shadow-sm invisible bottom-20 right-0 absolute group-hover:visible">
                                <Play weight="fill" />
                            </button>

                            <strong className="font-semibold">Daily Mix</strong>
                            <strong className="text-sm text-zinc-400">
                                Wallows, COIN, girl in red and more
                            </strong>
                        </a>
                        <a
                            href="#"
                            className="bg-white/5 p-3 flex flex-col gap-2 relative rounded-md group hover:bg-white/10"
                        >
                            <img
                                src="cover1.jpg"
                                className="w-full"
                                width={104}
                                height={104}
                            />
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-5 flex item-center shadow-sm invisible bottom-20 right-0 absolute group-hover:visible">
                                <Play weight="fill" />
                            </button>

                            <strong className="font-semibold">Daily Mix</strong>
                            <strong className="text-sm text-zinc-400">
                                Wallows, COIN, girl in red and more
                            </strong>
                        </a>
                        <a
                            href="#"
                            className="bg-white/5 p-3 flex flex-col gap-2 relative rounded-md group hover:bg-white/10"
                        >
                            <img
                                src="cover1.jpg"
                                className="w-full"
                                width={104}
                                height={104}
                            />
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-5 flex item-center shadow-sm invisible bottom-20 right-0 absolute group-hover:visible">
                                <Play weight="fill" />
                            </button>

                            <strong className="font-semibold">Daily Mix</strong>
                            <strong className="text-sm text-zinc-400">
                                Wallows, COIN, girl in red and more
                            </strong>
                        </a>
                        <a
                            href="#"
                            className="bg-white/5 p-3 flex flex-col gap-2 relative rounded-md group hover:bg-white/10"
                        >
                            <img
                                src="cover1.jpg"
                                className="w-full"
                                width={104}
                                height={104}
                            />
                            <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-5 flex item-center shadow-sm invisible bottom-20 right-0 absolute group-hover:visible">
                                <Play weight="fill" />
                            </button>

                            <strong className="font-semibold">Daily Mix</strong>
                            <strong className="text-sm text-zinc-400">
                                Wallows, COIN, girl in red and more
                            </strong>
                        </a>
                    </div>
                </main>
            </div>
            <footer className="bg-zinc-800 border-t border-zinc-700 flex py-3 items-center justify-between">
                <div className="w-96 px-6 flex">
                    <img
                        src="cover1.jpg"
                        alt="cuphead"
                        width={70}
                        height={70}
                    />
                    <div className="album mr-4 flex flex-col justify-center flex-wrap">
                        <p className="pl-2 font-semibold line-clamp-1">
                            Cuphead - Original Soundtrack
                        </p>
                        <p className="pl-2 text-sm text-zinc-400 line-clamp-1">
                            Álbum • Chistopher Larkin
                        </p>
                    </div>
                    <div className="like flex flex-col justify-center">
                        <Heart />
                    </div>
                </div>
            </footer>
        </div>
    );
}
