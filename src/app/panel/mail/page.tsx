import { cookies } from "next/headers"
import Image from "next/image"

import { Mail } from "@/app/panel/mail/components/mail"
import { accounts, mails } from "@/app/panel/mail/data"

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined
  // console.log("TESTER")
  // console.log(defaultLayout, defaultCollapsed)
  return (
    <>
      <div className=" flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
