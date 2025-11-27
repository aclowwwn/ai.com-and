import { RoiCalculator } from '../../components/calculator';
import { SimpleNavbar, Footer } from '../page';

export default function Page() {
    return (
        <main className="bg-brand-light min-h-screen">
            <SimpleNavbar />
            <br></br>
            <br></br>
            <br></br>
            <RoiCalculator />
            <Footer />
        </main>
    );
}