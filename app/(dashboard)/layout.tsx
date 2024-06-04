import NewTodoForm from "@/components/NewTodoForm"


function DashboardLayout({ children }) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout