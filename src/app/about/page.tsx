import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "เรียนรู้เกี่ยวกับทีมงานและเทคโนโลยีที่เราใช้ในการพัฒนาเว็บแอปพลิเคชัน",
  openGraph: {
    title: "เกี่ยวกับเรา | My Next.js App",
    description: "เรียนรู้เกี่ยวกับทีมงานและเทคโนโลยีที่เราใช้",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            เกี่ยวกับเรา
          </h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>ภารกิจของเรา</CardTitle>
              <CardDescription>
                สร้างสรรค์เว็บแอปพลิเคชันที่ทันสมัยและมีคุณภาพ
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                เราเชื่อว่าเว็บแอปพลิเคชันที่ดีต้องมีทั้งประสิทธิภาพและการออกแบบที่ดี
                ด้วย Next.js 16 เราสามารถสร้างเว็บไซต์ที่โหลดเร็ว
                ทำงานได้ราบรื่น และให้ประสบการณ์ที่ดีแก่ผู้ใช้งาน
              </p>
              <p className="text-slate-600 leading-relaxed">
                การใช้ Tailwind CSS และ shadcn/ui ช่วยให้เราสร้าง UI ที่สวยงาม
                สอดคล้องกัน และปรับแต่งได้ง่าย โดยไม่ต้องเสียเวลามากกับการเขียน
                CSS ซ้ำซ้อน
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>เทคโนโลยีที่ใช้</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▪</span>
                    <span className="text-slate-700">Next.js 16</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▪</span>
                    <span className="text-slate-700">
                      React Server Components
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▪</span>
                    <span className="text-slate-700">Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▪</span>
                    <span className="text-slate-700">shadcn/ui</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▪</span>
                    <span className="text-slate-700">TypeScript</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>จุดเด่น</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-slate-700">ประสิทธิภาพสูง</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-slate-700">SEO-friendly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-slate-700">Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-slate-700">Accessibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-slate-700">Type Safety</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
