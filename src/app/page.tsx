
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
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
            Hoşgeldiniz!
          </CardTitle>
          <p className="text-muted-foreground">
            Temiz çevre projesi.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
