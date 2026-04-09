import { dummyLinks } from "@/data/links"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  const activeLinks = dummyLinks
    .filter((link) => link.isActive)
    .sort((a, b) => a.order - b.order)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center mb-2">
          <div className="w-24 h-24 rounded-full bg-muted mb-4" /> {/* 더미 프로필 이미지 공간 */}
          <h1 className="text-2xl font-bold">MyLink</h1>
          <p className="text-sm text-muted-foreground mt-1">모든 링크를 한 곳에서</p>
        </div>

        <div className="flex flex-col gap-3">
          {activeLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
            >
              <Card className="hover:bg-accent transition-colors">
                <CardContent className="p-4 flex items-center justify-center">
                  <span className="font-medium">{link.title}</span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
