import * as FileInput from "@/components/form/FileInput";
import { InputControl, InputPrefix, InputRoot } from "@/components/form/Input";
import { Select, SelectItem } from "@/components/form/Select";
import { Textarea } from "@/components/form/Textarea";
import { SettingsTabs } from "@/components/SettingsTabs/SettingsTabs";
import { Button } from "@/components/ui/Button";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-small text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pb-5">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Matheus" />
              </InputRoot>
              <InputRoot>
                <InputControl defaultValue="Palmieri" />
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pb-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <InputRoot>
              <InputPrefix>
                <Mail className="size-5 text-zinc-500" />
              </InputPrefix>

              <InputControl
                type="email"
                id="email"
                defaultValue="matheus@backstage.app"
              />
            </InputRoot>
          </div>

          <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pb-5">
            <label
              htmlFor="yourPhoto"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.Preview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pb-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <InputRoot>
              <InputControl id="role" defaultValue="CTO" />
            </InputRoot>
          </div>

          <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pb-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br">Brasil</SelectItem>
              <SelectItem value="us">United States</SelectItem>
            </Select>
          </div>

          <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pb-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem value="utc8">
                Pacific Standard Time (UTC -08:00)
              </SelectItem>
              <SelectItem value="utc3">
                America São Paulo (UTC -03:00)
              </SelectItem>
            </Select>
          </div>

          <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pb-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Select defaultValue="normal">
                  <SelectItem value="normal">Normal text</SelectItem>
                  <SelectItem value="md">Markdown</SelectItem>
                </Select>

                <div className="ml-auto flex items-center gap-1">
                  <Button variant="ghost" size="icon">
                    <Bold className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Italic className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Link className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <List className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ListOrdered
                      className="size-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue='I"m a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.'
              />
            </div>
          </div>

          <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pb-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.List />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  );
}
