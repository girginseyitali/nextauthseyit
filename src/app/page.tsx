import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { auth } from "@/auth";

export default async function Home() {
    const session = await auth();
    return (
        <main className="grow flex items-center justify-center p-4">
            <Card className="max-w-sm">
                <CardHeader>
                    <Image
                        className="rounded-lg"
                        src="/toplama.png"
                        alt="img"
                        width={500}
                        height={500}
                        priority
                    />
                </CardHeader>
                <CardContent>
                    <CardTitle className="mb-2 text-2xl font-bold">
                        Welcome, {session?.user?.name}!
                    </CardTitle>
                    <p className="text-muted-foreground">
                        If you are learning something valuable from this video,
                        please like and subscribe to my channel.
                    </p>
                </CardContent>
            </Card>
        </main>
    );
}
