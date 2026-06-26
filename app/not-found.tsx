import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main>
      <h1>404</h1>

      <Link href="/">
        <Button variant="primary" size="md">
          ← Back home
        </Button>
      </Link>
    </main>
  );
}