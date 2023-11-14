import React from 'react'

const Register = () => {
  return (
    <div className="flex flex-col max-w-sm p-2 rounded-lg shadow-lg shadow-neutral-400 sm:p-10 border-2">
	<div className="mb-4 text-center">
		<h1 className="my-2 text-4xl font-bold">Sign up</h1>
		<p className="text-sm dark:text-gray-400">Sign up to access Books Store</p>
	</div>
	<form novalidate="" action="" className="space-y-2">
		<div className="space-y-2">
				<label htmlFor="name" className="block mb-1 text-sm">User Name</label>
				<input type="text" name="name" id="name" placeholder="User Name" className="w-full px-3 py-2 border rounded-md " />
			</div>
		<div className="space-y-2">
				<label htmlFor="email" className="block mb-1 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md " />
			</div>
				<div className="mb-1">
					<label htmlFor="password" className="text-sm">Password</label>
					<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md " />
		   </div>
		<div className="space-y-2 centerd flex-col">
				<button type="button" className="btn">Sign in</button>
		<p className="px-6 text-sm text-center dark:text-gray-400"> already have an account !
				<button className="hover:underline ms-1 ">log in</button>.
			</p>
		</div>
	</form>
</div>
  )
}

export default Register;
