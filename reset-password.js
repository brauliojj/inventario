import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://phkmjooeubaungvbtiwf.supabase.co',
  'sb_publishable__Lkgaj8gmCn2tee5jjigcw_TbU5e24B'
)

async function cambiarPassword() {
  const { data, error } = await supabase.auth.admin.updateUserById(
    'd72344c6-825a-4b71-ac4c-a63278726979',
    { password: '103088' }
  )

  if (error) {
    console.error(error)
  } else {
    console.log('Contraseña cambiada correctamente')
  }
}

cambiarPassword()
