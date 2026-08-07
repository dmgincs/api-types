
export interface WebHookPostBodyItem {
    id: number;
    title: string;
    quantity: number;
    product_id: number;
    name: string;
    fulfillment_status: null;
    fulfillable_quantity: number;
}

export class WebhookRequestDto {
    
    id: number;
    
    created_at: Date;
    
    updated_at?: Date;
    
    cancelled_at?: Date;
    
    order_number: number;
    
    fulfillment_status: string | null;
    
    line_items: WebHookPostBodyItem[];
    
    customer: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
    };
}
