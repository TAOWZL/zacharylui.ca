// Posts straight to Kit form 9434628 ("The Secret Menu Index"). Single opt-in:
// Kit redirects to /secret-menu on submit and sends the delivery email.
const KIT_FORM_ACTION = "https://app.kit.com/forms/9434628/subscriptions";

export default function IndexSignupForm({ id }: { id: string }) {
  return (
    <form
      action={KIT_FORM_ACTION}
      method="post"
      className="flex flex-wrap gap-3 rounded-lg border border-charcoal-800 bg-charcoal-950/80 p-4 sm:p-5"
    >
      <label htmlFor={`${id}-name`} className="sr-only">First name</label>
      <input
        id={`${id}-name`}
        name="fields[first_name]"
        type="text"
        required
        autoComplete="given-name"
        placeholder="First name"
        className="w-full min-w-0 flex-[1_1_11rem] rounded-md border border-charcoal-800 bg-zinc-950 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-400 focus:border-cinnabar-400"
      />
      <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
      <input
        id={`${id}-email`}
        name="email_address"
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className="w-full min-w-0 flex-[1_1_11rem] rounded-md border border-charcoal-800 bg-zinc-950 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-400 focus:border-cinnabar-400"
      />
      <button type="submit" className="btn-primary max-w-full flex-[1_1_auto]">
        Send me the free Index
      </button>
    </form>
  );
}
