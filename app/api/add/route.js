import clientPromise from "@/lib/mongodb"

export async function POST(request) {
try{

    const body = await request.json()
    
    const client = await clientPromise
    const db = client.db("linkTree")
    
    const collection =  db.collection("Links")

    const doc = await collection.findOne({handle: body.handle})
    if(doc){
      return Response.json({ success: false, error: true, message: 'Handle already exist', result: null })
    }

    const handle = body.handle
    const profile = body.profile

    if(handle == "" || profile == ""){
      return "Error 404"
    }
    
    const result = await collection.insertOne(body)
    console.log(body)
    return Response.json({ success: true, error: false, message: 'LinkTree Created', result: result })
  }
  catch(error){
    return Response.json({  error: error.message  }, {status:500})
  }
}