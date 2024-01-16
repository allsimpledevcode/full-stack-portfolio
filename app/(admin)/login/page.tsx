import LoginForm from "@/components/LoginForm"

export default function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {

  return (
      <div className="h-screen w-72 flex justify-center flex-col m-auto items-center">
        <LoginForm searchParams={searchParams}/>
      </div>
  )
}
