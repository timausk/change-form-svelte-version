import page from 'page';

// Views
import Contact from './views/Contact/index.svelte';
import Success from './views/Success.svelte';
import Error from './views/Error.svelte';
import Queue from './views/Queue.svelte';
import Partner from './views/Partner.svelte';
import NotFound404 from './views/NotFound404.svelte';

const router = {
    page: NotFound404,
    params: null
};

page('/contact/:id', (ctx, next) => {
    router.params = ctx.params;
    next();
}, () => router.page = Contact);
page('/success', () => router.page = Success);
page('/error', () => router.page = Error);
page('/queue', () => router.page = Queue);
page('/partner', () => router.page = Partner);
page('*', () => router.page = NotFound404);

page.start();

export default router;
