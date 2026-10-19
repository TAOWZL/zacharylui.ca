// Posts straight to Kit form 9434628 ("The Secret Menu Index"). Kit sends the
// confirmation email and redirects to /secret-menu after confirm.
const KIT_FORM_ACTION = "https://app.kit.com/forms/9434628/subscriptions";

export default function IndexSignupForm({ id }: { id: string }) {
  return (
    <form
      action={KIT_FORM_ACTION}
      method="post"
      className="grid gap-3 rounded-lg border border-charcoal-800 bg-charcoal-950/80 p-4 sm:grid-cols-[1fr_1.4fr_auto] sm:p-5"
    >
      <label htmlFor={`${id}-name`} className="sr-only">First name</label>
      <input
        id={`${id}-name`}
        name="fields[first_name]"
        type="text"
        required
        autoComplete="given-name"
        placeholder="First name"
        className="rounded-md border border-charcoal-800 bg-zinc-950 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-400 focus:border-cinnabar-400 focus:outline-none"
      />
      <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
      <input
        id={`${id}-email`}
        name="email_address"
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className="rounded-md border border-charcoal-800 bg-zinc-950 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-400 focus:border-cinnabar-400 focus:outline-none"
      />
      <button type="submit" className="btn-primary">
        Send me the free Index
      </button>
    </form>
  );
}
