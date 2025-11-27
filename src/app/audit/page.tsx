import AiReadinessAudit from '../../components/audit';
import { SimpleNavbar, Footer } from '../page';

export default function Page() {
    return (
        <main className="bg-brand-light min-h-screen">
            <SimpleNavbar />
            <AiReadinessAudit />
            <Footer />
        </main>
    );
}