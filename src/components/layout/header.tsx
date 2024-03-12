import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ThemeToggle } from '~/components/layout/theme-toggle';
import { useDisconnect } from 'wagmi';
import { signOut, useSession } from "next-auth/react";
import { Button } from '~/components/ui/button';
import { DashboardTabs } from '~/components/DashboardTabs';

export default function Header() {
    const { disconnect } = useDisconnect();
    const { status } = useSession();
    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b border-blue-500 bg-background/95 backdrop-blur">
            <nav className="flex h-16 items-center justify-between px-4">
                <Link
                    href={'/'}
                    className=" items-center justify-between gap-2 flex"
                >
                    <span><svg className="h-10 w-10" viewBox='0 0 256 257' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid'><path d='M210.377 126.784c0 46.231-37.477 83.708-83.708 83.708s-83.708-37.477-83.708-83.708 37.477-83.708 83.708-83.708 83.708 37.477 83.708 83.708' fill="#4D37B9" /><path d="M79.509 87.972l37.24-21.501a20.008 20.008 0 0 1 20.005 0l37.24 21.501a20.002 20.002 0 0 1 10.002 17.324v43.002a20.002 20.002 0 0 1-10.002 17.324l-37.24 21.501a20.003 20.003 0 0 1-20.005 0l-37.24-21.501a20.003 20.003 0 0 1-10.003-17.324v-43.002a20.003 20.003 0 0 1 10.003-17.324" fill="#FFF" /><g fill="#4D37B9"><path d="M126.537 99.521c9.416.001 18.832-.029 28.248.011 5.789.025 7.561 1.879 7.57 7.71.002 1.457.015 2.914-.003 4.371-.056 4.656-2.06 6.712-6.804 6.796-4.258.076-8.519-.026-12.778.029-5.013.065-6.869 1.929-6.886 6.95-.034 9.864.009 17.64 0 27.504 0 9.462-1.694 10.341-8.073 10.359-9.474.027-10.353-.846-10.353-10.359 0-9.08.025-18.159 0-27.239-.015-5.416-1.806-7.177-7.296-7.22-4.147-.033-8.297.058-12.443-.025-4.711-.094-6.684-2.164-6.733-6.866-.016-1.569-.008-3.139-.002-4.708.023-5.328 1.892-7.255 7.305-7.298 7.173-.057 14.348-.015 21.522-.015h6.726" /><path d="M144.132 132.591c0-2.272 1.809-2.441 1.809-2.441h6.354c3.745 0 6.733 3.577 6.733 7.07 0 2.606-1.219 4.321-1.837 5.024a.583.583 0 0 0-.014.755c.632.791 1.935 2.699 1.935 4.993 0 3.029-2.104 7.027-6.691 7.027h-6.48s-1.725.463-1.725-1.936c0-2.398 1.725-2.146 1.725-2.146h6.354c1.809 0 2.062-1.304 2.062-2.987 0-1.684-.757-3.03-2.062-3.03h-6.354s-1.767.126-1.767-2.188c0-2.315 1.767-2.399 1.767-2.399h6.354c1.473 0 2.062-1.599 2.062-2.861 0-1.262-.589-2.567-2.062-2.567h-6.354s-1.809-.042-1.809-2.314" /></g><g><path d="M220.841 42.795a7.995 7.995 0 1 1-15.99 0 7.995 7.995 0 0 1 15.99 0" fill="#B300E3" /><path d="M256 127.476a7.995 7.995 0 1 1-15.99 0 7.995 7.995 0 0 1 15.99 0" fill="#4E00BF" /><path d="M221.114 212.52a7.995 7.995 0 1 1-15.99 0 7.995 7.995 0 0 1 15.99 0" fill="#0EBBF0" /><path d="M136.369 248.305a7.994 7.994 0 0 1-7.995 7.994 7.995 7.995 0 1 1 7.995-7.994" fill="#93E477" /><path d="M51.175 212.52a7.994 7.994 0 1 1-15.989 0 7.995 7.995 0 1 1 15.989 0" fill="#DDE6EC" /><path d="M15.99 127.626a7.996 7.996 0 1 1-15.991-.001 7.996 7.996 0 0 1 15.991.001" fill="#FE4545" /><path d="M51.026 42.881a7.996 7.996 0 1 1-15.991-.001 7.996 7.996 0 0 1 15.991.001" fill="#FEB900" /><path d="M136.369 7.995a7.995 7.995 0 1 1-15.99 0 7.995 7.995 0 0 1 15.99 0" fill="#47E8E2" /></g></svg></span>
                    <h1 className="text-lg font-semibold">Trial-Task</h1>
                </Link>

                <div className='flex-inline absolute left-[200px] mt-[42px] max-w-0 sm:max-w-0 md:max-w-[200px] lg:max-w-[350px] xl:max-w-[550px] 2xl:max-w-[55rem]'>
                    <DashboardTabs />
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <ConnectButton label={'Connect Wallet'} />
                    {
                        status === 'authenticated'
                        &&
                        <Button
                            className=" bg-red-500  text-white"
                            size="sm"
                            onClick={() => {
                                disconnect();
                                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                                signOut();
                            }}
                        >
                            Log Out
                        </Button>
                    }
                </div>
            </nav>
        </div>
    );
}