// Interact with the customers table using crud operations and drizzle.
import { db } from "@db/client"
import { customersTable } from "@db/schemas/customerTables"
import { eq } from "drizzle-orm"
import { randomUUID } from "crypto"

export async function GET(request: Request) {
  try {
    // Get the URL from the request
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    // If ID is provided, fetch specific customer
    if (id) {
      const customer = await db.select().from(customersTable).where(eq(customersTable.id, id)).get();

      if (!customer) {
        return Response.json({ error: 'Customer not found' }, { status: 404 });
      }

      return Response.json(customer);
    }

    // If no ID, fetch all customers
    const customers = await db.select().from(customersTable);
    return Response.json(customers);

  } catch (error) {
    console.error('Error fetching customers:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.fullName) {
      return Response.json(
        { error: 'Full name is required' },
        { status: 400 }
      );
    }

    // Create a new customer
    const newCustomer = await db.insert(customersTable).values({
      id: randomUUID(),
      fullName: body.fullName,
      address: body.address || null,
      city: body.city || null,
      state: body.state || null,
      zip: body.zip || null,
      cellPhone: body.cellPhone || null,
      email: body.email || null,
      username: body.username || null,
      password: body.password || null,
      disableCustomerLogin: Boolean(body.disableCustomerLogin),
      profilePicture: body.profilePicture || null,
      photoId: body.photoId || null,
      dateOfBirth: body.dateOfBirth || null,
      driversLicenseExpiration: body.driversLicenseExpiration || null,
      militaryService: Boolean(body.militaryService),
      militaryBranch: body.militaryBranch || null,
      militaryActiveDuty: Boolean(body.militaryActiveDuty),
      militaryReserveNationalGuardOrTexasStateGuard: Boolean(body.militaryReserveNationalGuardOrTexasStateGuard),
      propertyToBeStored: body.propertyToBeStored || null,
      taxExempt: Boolean(body.taxExempt),
      lateFeeExempt: Boolean(body.lateFeeExempt),
      invoiceNote: body.invoiceNote || null,
      notes: body.notes || null,
      createdAt: new Date().toISOString(),
      createdBy: body.createdBy || null,
      updatedAt: new Date().toISOString(),
      lastUpdatedBy: body.lastUpdatedBy || null,
    } as typeof customersTable.$inferInsert).returning();

    return Response.json(newCustomer[0], { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    
    // Handle unique constraint violations
    if (error.message?.includes('UNIQUE constraint failed')) {
      return Response.json(
        { error: 'Email or username already exists' },
        { status: 409 }
      );
    }

    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    if (!id) {
      return Response.json(
        { error: 'Customer ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();

    // Check if customer exists
    const existingCustomer = await db.select().from(customersTable).where(eq(customersTable.id, id));
    if (!existingCustomer.length) {
      return Response.json(
        { error: 'Customer not found' },
        { status: 404 }
      );
    }

    // Update customer
    const updatedCustomer = await db.update(customersTable)
      .set({
        fullName: body.fullName,
        address: body.address || null,
        city: body.city || null,
        state: body.state || null,
        zip: body.zip || null,
        cellPhone: body.cellPhone || null,
        email: body.email || null,
        username: body.username || null,
        password: body.password || null,
        disableCustomerLogin: Boolean(body.disableCustomerLogin),
        profilePicture: body.profilePicture || null,
        photoId: body.photoId || null,
        dateOfBirth: body.dateOfBirth || null,
        driversLicenseExpiration: body.driversLicenseExpiration || null,
        militaryService: Boolean(body.militaryService),
        militaryBranch: body.militaryBranch || null,
        militaryActiveDuty: Boolean(body.militaryActiveDuty),
        militaryReserveNationalGuardOrTexasStateGuard: Boolean(body.militaryReserveNationalGuardOrTexasStateGuard),
        propertyToBeStored: body.propertyToBeStored || null,
        taxExempt: Boolean(body.taxExempt),
        lateFeeExempt: Boolean(body.lateFeeExempt),
        invoiceNote: body.invoiceNote || null,
        notes: body.notes || null,
        updatedAt: new Date().toISOString(),
        lastUpdatedBy: body.lastUpdatedBy || null,
      })
      .where(eq(customersTable.id, id))
      .returning();

    return Response.json(updatedCustomer[0]);
  } catch (error) {
    console.error('Error updating customer:', error);
    
    // Handle unique constraint violations
    if (error.message?.includes('UNIQUE constraint failed')) {
      return Response.json(
        { error: 'Email or username already exists' },
        { status: 409 }
      );
    }

    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    if (!id) {
      return Response.json(
        { error: 'Customer ID is required' },
        { status: 400 }
      );
    }

    // Check if customer exists
    const existingCustomer = await db.select().from(customersTable).where(eq(customersTable.id, id));
    if (!existingCustomer.length) {
      return Response.json(
        { error: 'Customer not found' },
        { status: 404 }
      );
    }

    // Delete customer
    await db.delete(customersTable).where(eq(customersTable.id, id));

    return Response.json(
      { message: 'Customer deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting customer:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}