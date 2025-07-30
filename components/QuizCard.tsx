import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface QuizCardProps {
    id: string;
    title: string;
    imageUrl: string;
}

export default function QuizCard({ id, title, imageUrl }: QuizCardProps) {
    return (
        <Card className="hover:shadow-lg transition duration-200 cursor-pointer text-center w-full h-full">
            <Link href={`/quiz/${id}`} className="block">
                <CardHeader className="justify-center">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={100}
                        height={100}
                        className="rounded-t-xl object-cover"
                    />
                </CardHeader>
                <CardContent>
                    <CardTitle>{title}</CardTitle>
                </CardContent>
            </Link>
        </Card>
    );
}
